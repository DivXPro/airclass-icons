// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderMusicLineSvg from '@airclass/icons-svg/lib/asn/FolderMusicLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderMusicLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderMusicLineSvg}></AntdIcon>;
};

FolderMusicLine.displayName = 'FolderMusicLine';
FolderMusicLine.inheritAttrs = false;
export default FolderMusicLine;