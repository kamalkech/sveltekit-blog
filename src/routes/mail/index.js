import * as nodemailer from 'nodemailer';

const mailtrap_access = {
	host: 'smtp.mailtrap.io',
	port: 2525,
	user: '797bae851396f8',
	pass: 'e0e9b560deacaa'
};

async function getTransporter() {
	return nodemailer.createTransport({
		host: mailtrap_access.host,
		port: mailtrap_access.port,
		auth: {
			user: mailtrap_access.user,
			pass: mailtrap_access.pass
		}
		// secure: true
	});
}

async function sendMail(data) {
	try {
		const transporter = await getTransporter();
		return await transporter.sendMail({
			from: data.email,
			to: 'supper@marocdevelop.ma',
			subject: 'Contact US',
			html: data.message
		});
	} catch (error) {
		console.log(`error`, error);
	}
}

export async function post(request) {
	const { data } = JSON.parse(request.body);
	console.log(`data`, data);
	const send = await sendMail(data);
	console.log(`send`, send);
	return {
		body: {
			msg: 'success'
		}
	};
}
