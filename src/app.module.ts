import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { OfertasModule } from './ofertas/ofertas.module';
import { ResidenciasModule } from './residencias/residencias.module';
import { SubastasModule } from './subastas/subastas.module';
import { SuscripcionesModule } from './suscripciones/suscripciones.module';
import { PublicacionesModule as PublicacionesModule } from './publicaciones/publicaciones.module';
import { ClientesModule } from './clientes/clientes.module';
import { SolicitudesModule } from './solicitudes/solicitudes.module';
import { AuthModule } from './auth/auth.module';
import { AdquisicionesModule } from './adquisiciones/adquisiciones.module';
import { CreditosModule } from './creditos/creditos.module';
import { HotsalesModule } from './hotsales/hotsales.module';

@Module({
	imports: [
		MongooseModule.forRoot( 'mongodb://localhost/home-switch-home', { useNewUrlParser: true } ),
		ResidenciasModule,
		SubastasModule,
		OfertasModule,
		SuscripcionesModule,
		PublicacionesModule,
		ClientesModule,
		SolicitudesModule,
		AdquisicionesModule,
		CreditosModule,
		HotsalesModule,
		AuthModule
	],
})
export class AppModule { }