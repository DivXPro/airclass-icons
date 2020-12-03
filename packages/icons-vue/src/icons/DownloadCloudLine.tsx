// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DownloadCloudLineSvg from '@airclass/icons-svg/lib/asn/DownloadCloudLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DownloadCloudLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DownloadCloudLineSvg}></AntdIcon>;
};

DownloadCloudLine.displayName = 'DownloadCloudLine';
DownloadCloudLine.inheritAttrs = false;
export default DownloadCloudLine;