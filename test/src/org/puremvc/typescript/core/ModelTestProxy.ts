///<reference path='../../../../../../bin/puremvc-typescript-standard-1.0.d.ts'/>

module test
{
	"use strict";

	/**
	 * A <code>Proxy</code> subclass used by <code>ModelTest</code> testCase.
	 */
	export class ModelTestProxy
		extends puremvc.Proxy
		implements puremvc.IProxy
	{
		/**
		 * Constructs a <code>ModelTestProxy</code> instance passing super its default name and
		 * an empty string initializer.
		 */
		constructor()
		{
			super( ModelTestProxy.NAME, '' );
		}

		/**
		 * @override.
		 */
		onRegister():void
		{
			this.setData( ModelTestProxy.ON_REGISTER_CALLED );
		}

		/**
		 * @override.
		 */
		onRemove():void
		{
			this.setData( ModelTestProxy.ON_REMOVE_CALLED );
		}

		/**
		 * @constant
		 */
		static NAME:string = 'ModelTestProxy';

		/**
		 * @constant
		 */
		static ON_REGISTER_CALLED:string = 'onRegister Called';

		/**
		 * @constant
		 */
		static ON_REMOVE_CALLED:string = 'onRemove Called';
	}
}