import { useRouter } from 'next/router';
import { useState } from 'react';

const Post = () => {
	const router = useRouter();
	const { code } = router.query;

	const [ userEmail, setEmail ] = useState('');

	const setToken = () => {
		fetch('http://localhost:8000/set-token', {
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
		<div>
			<p>Code: {code}</p>
			<input
				onChange={(input) => {
					setEmail(input.target.value.toString());
				}}
				value={userEmail}
			/>
			<button onClick={setToken}>GO</button>
		</div>
	);
};

export default Post;
