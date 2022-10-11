import path from 'path';
import initStoryshots, { multiSnapshotWithOptions, Stories2SnapsConverter } from '@storybook/addon-storyshots';

initStoryshots({
  framework: 'web-components',
  test: multiSnapshotWithOptions(),
  stories2snapsConverter: new Stories2SnapsConverter({
    snapshotsDirName: '__snapshots__',
    snapshotExtension: '.js.snap',
    storiesExtensions: ['.js', '.mdx'],
  }),
});