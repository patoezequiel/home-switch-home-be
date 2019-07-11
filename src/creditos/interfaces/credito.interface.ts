import { Document, Types } from 'mongoose';

export interface Credito extends Document {
	readonly fechaDeCreacion: string;
	readonly activo: boolean;
}