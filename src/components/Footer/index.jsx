import { h } from 'preact';
import Styles from './styles.module.scss';

function Footer() {
	return (
		<footer className={Styles.footer}>
			&copy; {new Date().getFullYear()} Oliver Marcell Toth
			<small className={Styles.byline}>🚀 Built by Astro</small>
			<small><a href="https://github.com/olivermtoth/olivermtoth.cf">Page source</a></small>
		</footer>
	);
}
export default Footer;
