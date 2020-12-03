// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DropboxLineSvg from '@airclass/icons-svg/lib/asn/DropboxLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DropboxLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DropboxLineSvg}></AntdIcon>;
};

DropboxLine.displayName = 'DropboxLine';
DropboxLine.inheritAttrs = false;
export default DropboxLine;