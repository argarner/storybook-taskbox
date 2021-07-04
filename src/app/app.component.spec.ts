import { render } from '@testing-library/angular';
import { AppComponent } from './app.component';
import { TaskModule } from './components/task.module';
import { NgxsModule, Store } from '@ngxs/store';
import { TasksState } from './state/task.state';

import { PureInboxScreenComponent } from './components/pure-inbox-screen.component';
import { InboxScreenComponent } from './components/inbox-screen.component';

describe('App', () => {
  test('should render the App component', async () => {
    const app = await render(AppComponent, {
      declarations: [PureInboxScreenComponent, InboxScreenComponent],
      imports: [TaskModule, NgxsModule.forRoot([TasksState])],
      providers: [Store],
    });
    expect(app).toBeTruthy();
  });
})
