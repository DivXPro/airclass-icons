// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FilePptLineSvg from '@airclass/icons-svg/lib/asn/FilePptLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FilePptLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilePptLineSvg}></AntdIcon>;
};

FilePptLine.displayName = 'FilePptLine';
FilePptLine.inheritAttrs = false;
export default FilePptLine;