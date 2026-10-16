type ContactProps = {
	email?: string;
};

export default function Contact({ email }: ContactProps) {
	const subject = encodeURIComponent("Pertanyaan tentang energi berkelanjutan");
	const emailHref = email ? `mailto:${email}?subject=${subject}` : undefined;

	return (
		<section
			id="kontak"
			aria-labelledby="contact-title"
			className="border-t border-emerald-950/10 bg-[#f1f5ef] px-6 py-20 sm:px-10 lg:px-16"
		>
			<div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-end">
				<div>
					<p className="mb-4 text-sm font-semibold uppercase tracking-[0.14em] text-emerald-800">
						Kontak
					</p>
					<h2
						id="contact-title"
						className="max-w-xl text-3xl font-semibold leading-tight text-emerald-950 sm:text-4xl"
					>
						Punya ide untuk energi yang lebih berkelanjutan?
					</h2>
					<p className="mt-5 max-w-lg text-base leading-7 text-zinc-700">
						Kirim pertanyaan, masukan, atau ajakan kolaborasi kepada tim kami.
						Kami siap mendengar ide Anda.
					</p>
				</div>

				<div className="border-t border-emerald-950/20 pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
					{email ? (
						<>
							<p className="text-sm text-zinc-600">Email</p>
							<a
								href={emailHref}
								className="mt-2 inline-block break-all text-lg font-medium text-emerald-950 underline decoration-emerald-700/40 underline-offset-4 transition-colors hover:text-emerald-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-800"
							>
								{email}
							</a>
							<div className="mt-6">
						<a
							href={emailHref}
							className="inline-flex min-h-11 items-center justify-center bg-emerald-900 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-emerald-800 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-emerald-900"
						>
							Kirim email
						</a>
							</div>
						</>
					) : (
						<p className="text-sm leading-6 text-zinc-600">
							Informasi kontak belum tersedia.
						</p>
					)}
				</div>
			</div>
		</section>
	);
}
