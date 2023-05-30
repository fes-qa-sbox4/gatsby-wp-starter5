import { Link } from 'gatsby'
import Footer from './footer'
import * as styles from './layout.module.css'

const Layout = ({ isHomePage, children }) => {
	return (
		<div
			className={`${styles.layout} flex flex-col mx-auto min-h-screen`}
			data-is-root-path={isHomePage}
		>
			<nav>
				<ul
					className={`${styles.navLinks} flex flex-row flex-wrap justify-between list-none mx-auto max-w-screen-sm`}
				>
					{[
						['🏠 Home', '/'],
						['📰 Posts', '/posts'],
						['📑 Pages', '/pages'],
						['⚛️ Examples', '/examples'],
					].map(([title, href], i) => (
						<li key={`key-${i}`}>
							<Link className="text-black no-underline" to={href}>
								{title}
							</Link>
						</li>
					))}
				</ul>
			</nav>
			<main className={styles.layoutMain}>{children}</main>
			<Footer />
		</div>
	)
}

export default Layout
