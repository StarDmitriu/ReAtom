document.querySelectorAll(".section-item").forEach(item => {
  item.addEventListener("click", () => {
    const id = item.dataset.window;
    console.log(id)
    const windowEl = document.getElementById(id);

    if (windowEl) {
      windowEl.classList.add("active");
    }
  });
});

document.querySelectorAll(".modal-window .close-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal-window").classList.remove("active");
  });
});

document.querySelectorAll('.modal-window').forEach(modal => {
	modal.addEventListener('click', e => {
		if (e.target === modal) {
			modal.classList.remove('active')
		}
	})
})






document.querySelectorAll('.aes-fact-item').forEach(item => {
	item.addEventListener('click', () => {
		const id = item.dataset.fact
		console.log(id)
		const factEl = document.getElementById(id)

		if (factEl) {
			factEl.classList.add('active')
		}
	})
})

document.querySelectorAll('.modal-fact .close-btn').forEach(btn => {
	btn.addEventListener('click', () => {
		btn.closest('.modal-fact').classList.remove('active')
	})
})

document.querySelectorAll('.modal-fact').forEach(modal => {
	modal.addEventListener('click', e => {
		if (e.target === modal) {
			modal.classList.remove('active')
		}
	})
})
