import styled from "styled-components";

export const FooterContainer = styled.div`
	background: var(--mainBlue);
	color: var(--white);
	padding: 2em 1.5em;
	width: 100%;
	height: 100%;
	font-family: Inter, Georgia, "Times New Roman", Times, serif;
	border-top: 1px solid var(--white);
	margin-top: 4.5em;

	.wrapper {
		width: 100%;
		grid-template-columns: 1fr 1fr 1fr;

		section {
			place-items: start;
			width: 100%;
			line-height: 2;
			grid-gap: 0.5em 0;

			.brand {
				width: 100%;
				/* grid-template-columns: 10% 90%; */
				grid-template-columns: repeat(12, 1fr);
				place-items: center;

				.brand-name {
					width: 100%;
					grid-column: 2/13;

					h1 {
						place-self: start;
						/* width: 100%; */
						margin-left: 1em;
						font-size: 1.5em;
					}
				}

				.logo {
					grid-column: 1/2;
					width: 50px;
					height: 100%;
					align-self: center;
					place-items: center;

					img {
						height: 50px;
					}
				}
			}

			p {
				font-size: 1em;
			}

			form {
				width: 100%;
				position: relative;

				input {
					width: 70%;
					height: 50px;
					padding: 0 0.75em;
					border-radius: 0.5em;
					background: var(--mainBlue);
					color: var(--white);
					border: 0.1em solid var(--white);
					letter-spacing: var(--letter-spacing);
				}

				button {
					position: absolute;
					top: 15px;
					right: 33%;
					outline: none;
					background: inherit;
					color: var(--white);

					.icon {
						font-size: 1.5em;
					}
				}
			}

			.social-icons {
				grid-template-columns: repeat(4, 1fr);
				width: 50%;
				place-items: start;
				margin: auto 0;
				padding: 1em 0;
				font-size: 1.5em;
			}
		}
	}

	@media (max-width: 767px) {
		& {
			.wrapper {
				grid-template-columns: 1fr;
				grid-gap: 2em 0;

				section {
					form {
						input {
							width: 95%;
						}

						button {
							right: 10%;
						}
					}
				}
			}
		}
	}
`;
