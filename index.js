var kittens = ["Milo", "Otis", "Garfield"]

destructivelyAppendKitten()

appendKitten (name) {
  return [ ...kittens, name ]
}
