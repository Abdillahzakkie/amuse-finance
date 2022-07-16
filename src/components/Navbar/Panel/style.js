import styled from "styled-components";

export const PortalWrapper = styled.div`
	position: absolute;
	top: var(--nav-height);
	right: 0;
	width: 350px;
	height: calc(100% - var(--nav-height));
	user-select: none;

	.list-group {
		width: 100%;

		.list-item {
			grid-template-columns: 1fr 10fr 1fr;
			grid-gap: 0 0.5em;
			width: 100%;
			background: orange;
			margin: 0 0 1em;
			padding: 0.75em 0.5em;
			font-size: 1.2em;
			letter-spacing: var(--letter-spacing);
			align-items: center;
			cursor: pointer;

			.icon {
				font-size: 1.3em;
			}
		}
	}

	@media (min-width: 1199px) {
		& {
			display: none;
		}
	}

	@media (max-width: 600px) {
		& {
			width: 100%;
		}
	}
`;
