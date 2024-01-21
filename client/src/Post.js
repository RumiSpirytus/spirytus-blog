export default function Post() {
	return (
		<div className="post">
			<div className="image">
				<img
					src="https://images.unsplash.com/photo-1504253163759-c23fccaebb55?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8fA%3D%3D"
					alt=""
				/>
			</div>
			<div className="texts">
				<h2>Text</h2>
				<p className="info">
					<a href="/" className="author">
						Thien
					</a>
					<time>21-01-2024 1:30</time>
				</p>
				<p className="summary">Paragraph</p>
			</div>
		</div>
	);
}
