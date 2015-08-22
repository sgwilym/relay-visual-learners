relay-visual-learners
=====================

Relay is a new framework from Facebook that promises to simplify a problem complex enough that the simplification is rather complex in itself.

I tend to learn things better when I can see how things fit together, so I made this interactive diagram that attempts to explain how Relay’s various parts fit together.

This diagram itself is a small react app using css-modules and webpack. You can clone this repo and run `npm start` to load up a hot loading dev environment.

# Todo

- The diagram is constructed from fragments of a single SVG illustration broken up into separate XML files and linked to each separate topic. While this works well enough, it means changing the diagram is a bit of a brittle process that usually requires changing most of the other diagram files. If you know a better way to component-ise a SVG, please feel free to make an issue or PR!
- Think one of the explanations for one of the topics is inaccurate or could be more succinctly expressed? Contributions are more than welcome.
