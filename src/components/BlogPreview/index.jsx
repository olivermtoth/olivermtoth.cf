import { h } from 'preact';
import Styles from './styles.module.scss';

function BlogPreview({ blog }) {
	return (
		<div className={Styles.card}>
			<div className={Styles.titleCard} style={`background-image:url(${blog.img})`}>
				<h1 className={Styles.title}>{blog.title}</h1>
			</div>
			<div className="pa3">
				<p className={`${Styles.desc} mt0 mb2`}>{blog.description}</p>
				<div className={Styles.tags}>
					Tagged:
					{blog.tags.map((t) => (
						<div className={Styles.tag} data-tag={t}>
							{t}
						</div>
					))}
				</div>
				<a className={Styles.link} href={blog.url}>
					<span className={Styles.linkInner}>View</span>
				</a>
			</div>
		</div>
	);
}

export default BlogPreview;