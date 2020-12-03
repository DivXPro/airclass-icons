// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderWarningFillSvg from '@airclass/icons-svg/lib/asn/FolderWarningFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderWarningFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderWarningFillSvg}></AntdIcon>;
};

FolderWarningFill.displayName = 'FolderWarningFill';
FolderWarningFill.inheritAttrs = false;
export default FolderWarningFill;