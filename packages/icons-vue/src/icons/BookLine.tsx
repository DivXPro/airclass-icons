// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { SetupContext } from 'vue';
import BookLineSvg from '@airclass/icons-svg/lib/asn/BookLine';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

const BookLine = (props: AntdIconProps, context: SetupContext) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BookLineSvg}></AntdIcon>;
};

BookLine.displayName = 'BookLine';
BookLine.inheritAttrs = false;
export default BookLine;