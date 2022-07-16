import styled from "styled-components";

export const NavbarWrapper = styled.div`
	width: 100vw;
	height: var(--nav-height);
	position: fixed;
	top: 0;
	left: 0;
	z-index: 1000;

	.nav-container {
		width: 100%;
		grid-template-columns: repeat(12, 1fr);
		/* background: var(--off-white); */
		/* color: var(--dark); */
		background: var(--dark);
		color: var(--white);

		padding: 0 0.5em;
		grid-gap: 0 0.5em;
		user-select: none;
		position: relative;

		.logo {
			grid-column: 1/2;
			grid-template-columns: repeat(6, 1fr);
			grid-gap: 0 0.5em;
			align-items: center;
			cursor: pointer;

			img {
				grid-column: 1/2;
				width: 40px;
				height: 40px;
			}
		}

		.form-group,
		.form-group-xs {
			grid-column: 2/7;
			height: auto;
			width: 100%;
			height: 100%;
			align-items: center;

			input {
				height: 50px;
				padding: 0 0.5em;
				border-radius: 0.5em;
				font-size: 0.85em;
				letter-spacing: var(--letter-spacing);
			}
		}

		.hide,
		.nav-list {
			display: none;
		}

		.nav-list-xl {
			display: grid;
		}

		.nav-list,
		.nav-list-xl {
			grid-column: 8/13;
			grid-template-columns: repeat(6, 1fr);
			grid-gap: 0 1em;
			align-items: center;
			width: 100%;

			li {
				place-items: center;
				font-size: 1.1em;
				color: var(--dark);
				width: 100%;
				cursor: pointer;
				text-transform: capitalize;
				color: inherit;

				p {
					letter-spacing: var(--letter-spacing);
				}

				.icon {
					font-size: 1.75em;
				}
			}
		}
	}

	@media (max-width: 1199px) {
		& {
			.nav-container {
				.nav-list-xl {
					display: none;
				}

				.form-group {
					grid-column: 2/10;
				}

				.nav-list-nl {
					display: grid;
					grid-column: 10/13;
					grid-template-columns: repeat(3, 1fr);
					grid-gap: 0 0.75em;
				}
			}
		}

		@media (max-width: 767px) {
			& {
				.nav-container {
					.nav-list-nl {
						display: none;
					}

					.form-group {
						grid-column: 2/12;
					}

					.nav-list-md {
						display: grid;
						grid-column: 13/13;
						grid-template-columns: 1fr;
					}
				}
			}

			@media (max-width: 424px) {
				& {
					.nav-container {
						.form-group,
						.nav-list-nl,
						.nav-list-md {
							display: none;
						}

						.nav-list-xs {
							display: grid;
							grid-column: 9/13;
							grid-template-columns: repeat(2, 1fr);

							li {
								.icon {
									font-size: 1.35em;
								}
							}
						}

						.mobile-search {
							display: grid;
							width: 100%;
							height: 70px;
							position: absolute;
							top: 100%;
							left: 0;
							background: var(--off-white);

							.form-group-xs {
								grid-column: 1/13;
								width: 95%;

								input {
									font-size: 0.75em;
								}
							}
						}
					}
				}

				@media (max-width: 370px) {
					& {
						.nav-container {
							.nav-list-xs {
								grid-column: 5/13;
							}
						}
					}
				}
			}
		}
	}
`;
