import scss from './vehicles.module.scss';
import icons from '../../../../assets/icons.svg';
const Vehicles = ({ data, register }) => {
	return (
		<>
			<h3 className={scss.title}>Vehicle type</h3>

			<div className={scss.wrapper_vehicle}>
				{data.map(({ title, icon }) => (
					<div key={icon} className={scss.item}>
						<input
							{...register('vehicles')}
							type="radio"
							id={icon}
							value={title}
							className={`${scss.visually_hidden} ${scss.item_input}`}
						/>
						<label className={scss.item_label} htmlFor={icon}>
							<svg className={scss.item_svg}>
								<use href={`${icons}#icon-${icon}`} />
							</svg>
							{title}
						</label>
					</div>
				))}
			</div>
		</>
	);
};

export default Vehicles;
