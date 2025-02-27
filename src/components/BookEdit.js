import '../custom.css';
import { useState } from 'react';

function BookEdit({ book, onSubmit }) {
	const [title, setTitle] = useState(book.title);

	const handleChange = (event) => {
		setTitle(event.target.value);
	}

	const handleSubmit = (event) => {
		event.preventDefault();

		onSubmit(book.id, title);
	}

	return (
		<div className='book-edit'>
			<form onSubmit={handleSubmit}>
				<label>Title</label>
				<input className="input" value={title} onChange={handleChange} />
				<button className="button is-primary">Save</button>
			</form>
		</div>
	);
}

export default BookEdit;
