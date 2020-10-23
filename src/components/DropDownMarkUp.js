import React, { Fragment } from 'react';

const DropDownMarkUp = () => {
	return (
		<Fragment>
			<div class='separatorContainer'>
				<div class='separators'>
					<p>
						Box Count:
						<input
							id='boxCount'
							class='inputField'
							type='number'
							value='10'
							min='2'
							step='2'
						/>
					</p>
				</div>
				<div class='separators'>
					<p>Primary Color:</p>
					<div class='primaryColorContainer' btnContainer>
						<button id='defaultPrimaryColorBtn' class='btns active'>
							Default
						</button>
						<button id='randomPrimaryColorBtn' class='btns'>
							Random
						</button>
						<button id='choosePrimaryColorBtn' class='btns'>
							Choose
							<input
								id='choosePrimaryColor'
								type='color'
								value='#000000'
							/>
						</button>
					</div>
				</div>
				<div class='separators'>
					<p>Secondary Color:</p>
					<div class='secondaryColorContainer btnContainer'>
						<button
							id='defaultSecondaryColorBtn'
							class='btns active'
						>
							Default Random
						</button>
						<button id='chooseSecondaryColorBtn' class='btns'>
							Choose
							<input
								id='chooseSecondaryColor'
								type='color'
								value='#8C00FF'
							/>
						</button>
					</div>
				</div>
				<div class='separators'>
					<p>Background Color:</p>
					<div class='backgroundColorContainer btnContainer'>
						<button
							id='defaultBackgroundColorBtn'
							class='btns active'
						>
							Default
						</button>
						<button id='randomBackgroundColorBtn' class='btns'>
							Random
						</button>
						<button id='chooseBackgroundColorBtn' class='btns'>
							Choose
							<input
								id='chooseBackgroundColor'
								type='color'
								value='#EEEEEE'
							/>
						</button>
					</div>
				</div>
			</div>
			<div class='styleContainer btnContainer'>
				<p>Styles</p>
				<div class='btnContainer'>
					<button id='randomBtn' class='btns boxPatternBtns active'>
						Random
					</button>
					<button id='fullCloneBtn' class='btns boxPatternBtns'>
						Full Clone
					</button>
					<button id='fullReflectBtn' class='btns boxPatternBtns'>
						Full Reflect
					</button>
					<button id='fullRotateBtn' class='btns boxPatternBtns'>
						Full Rotate
					</button>
					<button id='halfReflectBtn' class='btns boxPatternBtns'>
						Half Reflect
					</button>
					<button id='noPatternBtn' class='btns boxPatternBtns'>
						No Pattern
					</button>
				</div>
			</div>
		</Fragment>
	);
};

export default DropDownMarkUp;
