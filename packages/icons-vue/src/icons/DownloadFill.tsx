// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DownloadFillSvg from '@airclass/icons-svg/lib/asn/DownloadFill';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DownloadFill = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DownloadFillSvg}></AntdIcon>;
};

DownloadFill.displayName = 'DownloadFill';
DownloadFill.inheritAttrs = false;
export default DownloadFill;