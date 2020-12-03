// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AlbumLineSvg from '@airclass/icons-svg/lib/asn/AlbumLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlbumLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlbumLineSvg}></AntdIcon>;
};

AlbumLine.displayName = 'AlbumLine';
AlbumLine.inheritAttrs = false;
export default AlbumLine;