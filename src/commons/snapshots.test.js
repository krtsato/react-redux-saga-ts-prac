import initStoryshots, {Stories2SnapsConverter, multiSnapshotWithOptions} from "@storybook/addon-storyshots"

initStoryshots({
  test: multiSnapshotWithOptions(),
  integrityOptions: {cwd: "src/components"},
  stories2snapsConverter: new Stories2SnapsConverter({
    snapshotExtension: ".snap.js",
    snapshotsDirName: "snapshot"
  })
})
