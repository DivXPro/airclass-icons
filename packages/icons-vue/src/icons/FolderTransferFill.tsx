// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderTransferFillSvg from '@airclass/icons-svg/lib/asn/FolderTransferFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderTransferFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderTransferFillSvg}></AntdIcon>;
};

FolderTransferFill.displayName = 'FolderTransferFill';
FolderTransferFill.inheritAttrs = false;
export default FolderTransferFill;