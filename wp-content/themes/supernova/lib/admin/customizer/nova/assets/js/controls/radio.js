/**
 * KIRKI CONTROL: RADIO
 */
wp.customize.controlConstructor['nova-radio'] = wp.customize.Control.extend( {
	ready: function() {
		var control = this;
		this.container.on( 'change', 'input', function() {
			control.setting.set( jQuery( this ).val() );
		});
	}
});
