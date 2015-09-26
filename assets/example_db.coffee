PATH = '/assets/media/art'

art = for num in [0...11]
	{
		name: "Картина #{ num }"
		description: "Описание #{ num }"
		image: {
			tmb: {
				'1x': "#{PATH}/tmb/art-#{ num }.jpg"
				'2x': "#{PATH}/tmb/2x/art-#{ num }.jpg"
			}
			src: "#{PATH}/full/art-#{ num }.jpg"
		}
	}

module.exports = {
	art: art
}
