PATH = '/assets/media/art'

art = for num in [0...11]
	{
		title: "Картина #{ num }"
		description: "Описание #{ num }"
		tmb: {
			'1x': "#{PATH}/tmb/art-#{ num }.jpg"
			'2x': "#{PATH}/tmb/2x/art-#{ num }.jpg"
		}
		w: 4718
		h: 3305
		src: "#{PATH}/full/art-#{ num }.jpg"
	}

# Отсортировать случайно
art.sort () -> 0.5 - Math.random()

module.exports = {
	art: art
}
