// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FileMusicLineSvg from '@airclass/icons-svg/lib/asn/FileMusicLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FileMusicLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FileMusicLineSvg}></AntdIcon>;
};

FileMusicLine.displayName = 'FileMusicLine';
FileMusicLine.inheritAttrs = false;
export default FileMusicLine;