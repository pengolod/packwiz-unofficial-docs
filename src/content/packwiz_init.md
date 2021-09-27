## packwiz init

Initialise a packwiz modpack

```
packwiz init [flags]
```

### Options

```
      --author string               The author of the modpack (omit to define interactively)
      --fabric-latest               Automatically select the latest version of Fabric loader
      --fabric-version string       The Fabric loader version to use (omit to define interactively)
      --forge-latest                Automatically select the latest version of Forge
      --forge-version string        The Forge version to use (omit to define interactively)
  -h, --help                        help for init
      --index-file string           The index file to use (default "index.toml")
  -l, --latest                      Automatically select the latest version of Minecraft
      --liteloader-latest           Automatically select the latest version of LiteLoader
      --liteloader-version string   The LiteLoader version to use (omit to define interactively)
      --mc-version string           The Minecraft version to use (omit to define interactively)
      --modloader string            The mod loader to use (omit to define interactively)
      --name string                 The name of the modpack (omit to define interactively)
  -r, --reinit                      Recreate the pack file if it already exists, rather than exiting
  -s, --snapshot                    Use the latest snapshot version with --latest
      --version string              The version of the modpack (omit to define interactively)
```

### Options inherited from parent commands

```
      --config string        The config file to use (default "/Users/calebjasik/Library/Application Support/packwiz/.packwiz.toml")
      --mods-folder string   The default folder to store mod metadata files in (default "mods")
      --pack-file string     The modpack metadata file to use (default "pack.toml")
```
