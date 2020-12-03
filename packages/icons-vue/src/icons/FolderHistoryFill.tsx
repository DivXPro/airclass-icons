// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderHistoryFillSvg from '@airclass/icons-svg/lib/asn/FolderHistoryFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderHistoryFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderHistoryFillSvg}></AntdIcon>;
};

FolderHistoryFill.displayName = 'FolderHistoryFill';
FolderHistoryFill.inheritAttrs = false;
export default FolderHistoryFill;