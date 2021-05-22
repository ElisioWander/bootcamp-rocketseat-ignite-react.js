import { useState, FormEvent } from 'react'
import Modal from 'react-modal'

import { api } from '../../services/api'

import { Container } from './styles'
import { TransactionTypeContainer, RadioBox } from './styles'

import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'


interface NewTransactionModalProps {
    isOpen: boolean,
    onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')

    const [typeTransaction, setTypeTransaction] = useState('deposit')

    function handleCreateNewTransaction(event: FormEvent) {
        event.preventDefault()

        const data = {
            title,
            value,
            category,
            typeTransaction
        }

        api.post('/transaction', data)        
    }
    
    return (
        <Modal 
        isOpen={isOpen} 
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >
        
        <button 
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
        >
            <img src={closeImg} alt="Fechar modal" />
        </button>
        
        <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar Transação</h2>

            <input
            type="text"
            placeholder="Título"
            value={title}
            onChange={event => setTitle(event.target.value)}
            />

            <input 
            type="number"
            placeholder="Valor"
            value={value}
            onChange={event => setValue(Number(event.target.value))}
            />

            <TransactionTypeContainer>
                <RadioBox
                type="button"
                onClick={() => setTypeTransaction('deposit')}
                isActive={typeTransaction === 'deposit'}
                activeColor={'green'}
                >

                    <img src={incomeImg} alt="Entrada" />
                    <span>
                        Entrada
                    </span>
                </RadioBox>

                <RadioBox 
                type="button"
                onClick={() => setTypeTransaction('withdraw')}
                isActive={typeTransaction === 'withdraw'}
                activeColor={'red'}
                >
                    <img src={outcomeImg} alt="Saída" />
                    <span>
                        Saída
                    </span>
                </RadioBox>
            </TransactionTypeContainer>

            <input 
            type="text"
            placeholder="Categoria"
            value={category}
            onChange={event => setCategory(event.target.value)}
            />

            <button type="submit">
                Enviar
            </button>
        </Container>
        
        </Modal>       
    )
}