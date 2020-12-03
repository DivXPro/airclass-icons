// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FolderDownloadFillSvg from '@airclass/icons-svg/lib/asn/FolderDownloadFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FolderDownloadFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FolderDownloadFillSvg}></AntdIcon>;
};

FolderDownloadFill.displayName = 'FolderDownloadFill';
FolderDownloadFill.inheritAttrs = false;
export default FolderDownloadFill;