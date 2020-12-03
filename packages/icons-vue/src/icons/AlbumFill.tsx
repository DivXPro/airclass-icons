// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import AlbumFillSvg from '@airclass/icons-svg/lib/asn/AlbumFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const AlbumFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlbumFillSvg}></AntdIcon>;
};

AlbumFill.displayName = 'AlbumFill';
AlbumFill.inheritAttrs = false;
export default AlbumFill;