// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import NeteaseCloudMusicLineSvg from '@airclass/icons-svg/lib/asn/NeteaseCloudMusicLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const NeteaseCloudMusicLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={NeteaseCloudMusicLineSvg}></AntdIcon>;
};

NeteaseCloudMusicLine.displayName = 'NeteaseCloudMusicLine';
NeteaseCloudMusicLine.inheritAttrs = false;
export default NeteaseCloudMusicLine;