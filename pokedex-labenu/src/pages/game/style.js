import styled from "styled-components";

export const GameContainer = styled.body`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	
	h1 {
		margin-top: 0;
		padding: 15px;
		width: 100%;
		background-color: #30344c;
		color: #ffffff;
	}

	img {
		width: 200px;
		border-radius: 40px;
		background-color: #0000000e;
		transition: filter 0.3s ease;
	}

	.hidden {
		filter: brightness(0%);
	}

	span {
		font-weight: bold;
	}

	span.lose {
		padding: 0 8px;
		background-color: #d30208;
		color: white;
	}

	span.win {
		padding: 0 8px;
		background-color: #0bb10b;
		color: white;
	}

	.options-container {
		display: flex;
		flex-direction: column;
		align-items: center;
		height: 180px;
	}

	button {
		margin-bottom: 5px;
		padding: 10px;
		background-color: #30344c;
		width: 130px;
		border: transparent solid 2px;
		border-radius: 7px;
		color: white;
		font-weight: bold;
		cursor: pointer;
	}

	button:hover {
		background-color: #5E6C8F;
	}

	button.try-another {
		margin-top: 80px;
		background-color: #EF4036;
		transition: 0.3s;
	}

	button.try-another:hover {
		background-color: red;
	}

	.lds-ellipsis {
		display: inline-block;
		position: relative;
		margin-top: 100px;
		width: 80px;
		height: 80px;
	}
	.lds-ellipsis div {
		position: absolute;
		top: 33px;
		width: 13px;
		height: 13px;
		border-radius: 50%;
		background: #30344c;
		animation-timing-function: cubic-bezier(0, 1, 1, 0);
	}
	.lds-ellipsis div:nth-child(1) {
		left: 8px;
		animation: lds-ellipsis1 0.6s infinite;
	}
	.lds-ellipsis div:nth-child(2) {
		left: 8px;
		animation: lds-ellipsis2 0.6s infinite;
	}
	.lds-ellipsis div:nth-child(3) {
		left: 32px;
		animation: lds-ellipsis2 0.6s infinite;
	}
	.lds-ellipsis div:nth-child(4) {
		left: 56px;
		animation: lds-ellipsis3 0.6s infinite;
	}
	@keyframes lds-ellipsis1 {
		0% {
			transform: scale(0);
		}
		100% {
			transform: scale(1);
		}
	}
	@keyframes lds-ellipsis3 {
		0% {
			transform: scale(1);
		}
		100% {
			transform: scale(0);
		}
	}
	@keyframes lds-ellipsis2 {
		0% {
			transform: translate(0, 0);
		}
		100% {
			transform: translate(24px, 0);
		}
	}
`

export const ImageContainer = styled.div`
	height: 200px;
	margin: 0 0 10px;
`
export const BackButton = styled.button`
	position: absolute;
	top: 15px;
	left: 25px;
`
