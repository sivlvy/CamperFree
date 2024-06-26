import scss from './Equipment.module.scss';
import icons from '../../../../assets/icons.svg';

const Equipment = ({ data, register }) => {
	return (
		<>
			<h3 className={scss.title}>Vehicle equipment</h3>

			<div className={scss.wrapper_equip}>
				{data.map(({ title, icon, back }) => (
					<div key={icon} className={scss.item}>
						<input
							{...register(`${back}`)}
							type="checkbox"
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

export default Equipment;
