import Equipment from './Equipment/Equipment';
import Vehicles from './Vehicles/Vehicles';
import scss from './Filters.module.scss';

import equipments from './Equipment/equipments.json';
import vehicles from './Vehicles/vehicles.json';

import { useForm } from 'react-hook-form';

const Filters = () => {
	const defaultValues = {
		equipments,
		vehicles: '',
	};
	const { register, handleSubmit } = useForm(defaultValues);

	const onSubmit = (data) => {
		console.log(data);
	};
	return (
		<div className={scss.wrapper}>
			<h3 className={scss.title}>Filters</h3>
			<form onSubmit={handleSubmit(onSubmit)}>
				<Equipment register={register} data={equipments} />
				<Vehicles register={register} data={vehicles} />
				<button className={scss.btn}>Find</button>
			</form>
		</div>
	);
};

export default Filters;
