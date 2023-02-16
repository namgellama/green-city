import { useState } from 'react';
import Select from 'react-select';

function Checkbox({ flavours }) {
	const options = [...flavours];
	const [flavour, setFlavour] = useState('');

	const handleChange = (e) => {
		setFlavour(e.value);
		console.log(e.value);
	};

	return (
		<Select
			options={options}
			className="w-[300px]"
			defaultValue={options[0]}
			// value={options}
			onChange={handleChange}
		/>
	);
}

export default Checkbox;
