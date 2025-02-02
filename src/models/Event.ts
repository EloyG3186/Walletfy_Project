import { v4 as uuidv4 } from 'uuid';

export interface Event {
    id: string;
    name: string;
    description?: string;
    amount: number;
    type: 'income' | 'expense';
    date: string;
    attachment?: string;
}

export const createEvent = (
    name: string,
    amount: number,
    type: 'income' | 'expense',
    date: string,
    description?: string,
    attachment?: string
): Event => {
    const id = uuidv4();
    console.log('Generated ID:', id); // Agregar console.log para verificar el ID
    
    if (name.length > 20) {
        throw new Error('El nombre debe tener menos de 20 caracteres');
    }
    if (description && description.length > 100) {
        throw new Error('La descripción debe tener menos de 100 caracteres');
    }
    if (amount <= 0) {
        throw new Error('El monto debe ser mayor a 0');
    }
    if (isNaN(Date.parse(date))) {
        throw new Error('La fecha no es válida');
    }
    if (type !== 'income' && type !== 'expense') {
        throw new Error('El tipo de evento no es válido');
    }

    return {
        id: uuidv4(),
        name,
        description,
        amount,
        type,
        date,
        attachment,
    };
};