// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import DownloadLineSvg from '@airclass/icons-svg/lib/asn/DownloadLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const DownloadLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DownloadLineSvg}></AntdIcon>;
};

DownloadLine.displayName = 'DownloadLine';
DownloadLine.inheritAttrs = false;
export default DownloadLine;