<script lang="ts">
	import { get } from 'svelte/store';
	import { Field, valuesForm } from 'svelte-formly';

	const fields = [
		{
			prefix: {
				class: ['form-group floating-label-form-group controls']
			},
			type: 'text',
			name: 'name',
			value: 'kamal',
			id: 'name',
			class: ['form-control'],
			placeholder: 'Name',
			validation: ['required', 'min:3'],
			messages: {
				required: 'Please enter your name',
				min: 'Name field must have more that 3 caracters!'
			}
		},
		{
			prefix: {
				class: ['form-group floating-label-form-group controls']
			},
			type: 'email',
			name: 'email',
			value: 'kamal@email.com',
			id: 'email',
			class: ['form-control'],
			placeholder: 'Email Address',
			validation: ['required', 'email'],
			messages: {
				required: 'Please enter your email address',
				email: 'Email field must have more that 6 caracters!'
			}
		},
		{
			prefix: {
				class: ['form-group floating-label-form-group controls']
			},
			type: 'text',
			name: 'tel',
			value: '0621548754',
			id: 'tel',
			class: ['form-control'],
			placeholder: 'Phone Number',
			validation: ['required', 'min:10'],
			messages: {
				required: 'Please enter your Phone Number',
				min: 'Phone Number field must have more that 10 caracters!'
			}
		},
		{
			prefix: {
				class: ['form-group floating-label-form-group controls']
			},
			type: 'textarea',
			name: 'message',
			value: 'Send mail from sveltekit',
			label: 'Message',
			id: 'message',
			class: ['form-control'],
			placeholder: 'Message',
			validation: ['required', 'min:6'],
			messages: {
				required: 'Please enter a Message',
				min: 'Message field must have more that 6 caracters!'
			}
		}
	];

	async function onSubmit() {
		const data: any = get(valuesForm);
		if (data.isValidForm) {
			const values = data.values;
			const fieldsValue = new FormData();
			fieldsValue.append('json', JSON.stringify(values));
			console.log(`values`, JSON.stringify(values));

			const sendMail = await fetch('http://localhost:3000/mail', {
				method: 'POST',
				headers: {
					Accept: 'application/json'
				},
				body: JSON.stringify({ data: values })
			});

			console.log(`sendMail`, sendMail);
		}
	}
</script>

<p>
	Want to get in touch? Fill out the form below to send me a message and I will get back to you as
	soon as possible!
</p>

<form on:submit|preventDefault={onSubmit} name="sentMessage" id="contactForm">
	<Field {fields} />
	<button class="btn btn-primary" type="submit">Submit</button>
</form>

<!-- <form name="sentMessage" id="contactForm" novalidate>
	<div class="form-group floating-label-form-group controls">
		<div class="form-group floating-label-form-group controls">
			<label>Name</label>
			<input
				type="text"
				class="form-control"
				placeholder="Name"
				id="name"
				required
				data-validation-required-message="Please enter your name."
			/>
			<p class="help-block text-danger" />
		</div>
	</div>
	<div class="form-group floating-label-form-group controls">
		<div class="form-group floating-label-form-group controls">
			<label>Email Address</label>
			<input
				type="email"
				class="form-control"
				placeholder="Email Address"
				id="email"
				required
				data-validation-required-message="Please enter your email address."
			/>
			<p class="help-block text-danger" />
		</div>
	</div>
	<div class="form-group floating-label-form-group controls">
		<div class="form-group col-xs-12 floating-label-form-group controls">
			<label>Phone Number</label>
			<input
				type="tel"
				class="form-control"
				placeholder="Phone Number"
				id="phone"
				required
				data-validation-required-message="Please enter your phone number."
			/>
			<p class="help-block text-danger" />
		</div>
	</div>
	<div class="form-group floating-label-form-group controls">
		<div class="form-group floating-label-form-group controls">
			<label>Message</label>
			<textarea
				rows="5"
				class="form-control"
				placeholder="Message"
				id="message"
				required
				data-validation-required-message="Please enter a message."
			/>
			<p class="help-block text-danger" />
		</div>
	</div>
	<br />
	<div id="success" />
	<button type="submit" class="btn btn-primary" id="sendMessageButton">Send</button>
</form> -->
<style lang="scss">
	#contactForm :global(.invalid-feedback) {
		display: block;
	}
</style>
