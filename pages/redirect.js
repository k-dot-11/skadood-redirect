import { useRouter } from 'next/router';
import { useState } from 'react';

const Post = () => {
	const router = useRouter();
	const { code } = router.query;

	const [ userEmail, setEmail ] = useState('');

	const setToken = () => {
		// fetch('http://localhost:8000/set-token', {
		fetch('https://ancient-wave-59600.herokuapp.com/set-token', {
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			headers: {
				'Content-Type': 'application/json'
			},
			redirect: 'follow',
			referrerPolicy: 'no-referrer',
			body: JSON.stringify({ email: userEmail, authcode: code })
		});
	};

	return (
		<div
			style={{
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				width: '100vw',
				flexDirection: 'column'
			}}
		>
			<p>Code: {code}</p>
			<p>Enter your email</p>
			<input
				onChange={(input) => {
					setEmail(input.target.value.toString());
				}}
				value={userEmail}
				placeholder="johndoe@gmail.com"
				style={{ marginBottom: '2rem' }}
			/>
			<button onClick={setToken}>GO</button>
		</div>
	);
};

export default Post;
