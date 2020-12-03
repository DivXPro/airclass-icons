// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DropboxFillSvg from '@airclass/icons-svg/lib/asn/DropboxFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DropboxFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DropboxFillSvg}></AntdIcon>;
};

DropboxFill.displayName = 'DropboxFill';
DropboxFill.inheritAttrs = false;
export default DropboxFill;