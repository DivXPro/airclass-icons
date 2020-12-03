// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import FilePdfLineSvg from '@airclass/icons-svg/lib/asn/FilePdfLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const FilePdfLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={FilePdfLineSvg}></AntdIcon>;
};

FilePdfLine.displayName = 'FilePdfLine';
FilePdfLine.inheritAttrs = false;
export default FilePdfLine;