// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderOpenFillSvg from '@airclass/icons-svg/lib/asn/FolderOpenFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderOpenFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderOpenFillSvg}></AntdIcon>;
};

FolderOpenFill.displayName = 'FolderOpenFill';
FolderOpenFill.inheritAttrs = false;
export default FolderOpenFill;